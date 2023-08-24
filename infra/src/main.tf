terraform {
  backend "azurerm" {
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.54.0"
    }

    random = {
      source  = "hashicorp/random"
      version = "~> 3.4.3"
    }

  }
}

provider "azurerm" {
  subscription_id            = var.subscription_id
  tenant_id                  = var.tenant_id
  skip_provider_registration = true
  features {}
}

resource "azurerm_service_plan" "ch" {
  name                = "${var.naming_prefix}-${var.environment}-asp"
  location            = var.location
  resource_group_name = data.azurerm_resource_group.ch.name
  os_type             = "Linux"
  sku_name            = var.web_tier
}

resource "azurerm_linux_web_app" "ch" {
  name                       = "${var.naming_prefix}-${var.environment}-web"
  location                   = var.location
  resource_group_name        = data.azurerm_resource_group.ch.name
  service_plan_id            = azurerm_service_plan.ch.id
  https_only                 = "true"

  app_settings = {
    
    
    APPINSIGHTS_INSTRUMENTATIONKEY        = azurerm_application_insights.ch.instrumentation_key
    APPLICATIONINSIGHTS_CONNECTION_STRING = azurerm_application_insights.ch.connection_string
    APPLICATIONINSIGHTS_ROLENAME          = "${var.naming_prefix}-${var.environment}-web"
    COSMOSDB_ENDPOINT                     = azurerm_cosmosdb_account.ch.endpoint
    COSMOSDB_KEY                          = azurerm_cosmosdb_account.ch.primary_key
    DATABASE_NAME                         = azurerm_cosmosdb_sql_database.ch.name
    COSMOSDB_USERS_CONTAINER              = azurerm_cosmosdb_sql_container.ch-container-users.name
    WEBSITE_RUN_FROM_PACKAGE              = "1"
    WEBSITE_ENABLE_SYNC_UPDATE_SITE       = "true"
    SCM_DO_BUILD_DURING_DEPLOYMENT        = "false"
  }

  site_config {
    always_on         = var.web_always_on
    app_command_line  = "NODE_ENV=production npm run start"
    ftps_state        = "Disabled"
    http2_enabled     = true
    health_check_path = "/api/health"
    application_stack {
      node_version = "18-lts"
    }
  }
}

resource "azurerm_cosmosdb_account" "ch" {
  name                               = "${var.naming_prefix}-${var.environment}-cdb"
  location                           = var.location
  resource_group_name                = data.azurerm_resource_group.ch.name
  offer_type                         = "Standard"
  access_key_metadata_writes_enabled = false
  local_authentication_disabled      = false
  ip_range_filter                    = "0.0.0.0" # limited to azure public datacenters

  capabilities {
    name = "EnableServerless"
  }

  backup {
    type = "Continuous"
  }

  consistency_policy {
    consistency_level       = "Session"
    max_interval_in_seconds = 5
    max_staleness_prefix    = 100
  }

  geo_location {
    location          = var.location
    failover_priority = 0
  }
}

resource "azurerm_cosmosdb_sql_database" "ch" {
  name                = "${var.naming_prefix}-${var.environment}-db"
  resource_group_name = data.azurerm_resource_group.ch.name
  account_name        = azurerm_cosmosdb_account.ch.name
}

resource "azurerm_cosmosdb_sql_container" "ch-container-users" {
  name                = "users"
  resource_group_name = data.azurerm_resource_group.ch.name
  account_name        = azurerm_cosmosdb_account.ch.name
  database_name       = azurerm_cosmosdb_sql_database.ch.name
  partition_key_path  = "/id"
}

resource "azurerm_log_analytics_workspace" "ch" {
  name                = "${var.naming_prefix}-${var.environment}-law"
  location            = var.location
  resource_group_name = data.azurerm_resource_group.ch.name
  sku                 = "PerGB2018"
  retention_in_days   = 730
}

resource "azurerm_application_insights" "ch" {
  name                = "${var.naming_prefix}-${var.environment}-ai"
  location            = var.location
  resource_group_name = data.azurerm_resource_group.ch.name
  workspace_id        = azurerm_log_analytics_workspace.ch.id
  application_type    = "web"
}




