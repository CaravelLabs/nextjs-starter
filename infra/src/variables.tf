# You can use a '.tfvars' file to supply values for these variables or provide them at execution time.
# read more here: https://www.terraform.io/docs/configuration/variables.html


variable app_display_name {
  type = string
  description = "The name of the application, this is used mainly to name app registrations"
  default = "Mollopus"
}

variable subscription_id {
  type = string
  description = "The Azure subscription to deploy these resources to"
}

variable tenant_id {
  type = string
  description = "The Azure tenant where the resources are deployed to"
}


variable main_resource_group_name {
  type = string
  description = "The Azure resource group the resources are deployed to"
}

variable environment {
  type        = string
  description = "solution environment where the resource will be used for. (dev, ci, uat, prod..)"
  default     = "ci"
}

variable location {
  type        = string
  description = "The default Azure region to deploy to"
  default     = "eastus2"
}

variable naming_prefix {
  type        = string
  description = "Prefix used when generating resource names"
  default     = "caravel"
}

variable web_always_on {
  type        = string
  description = "Whether the Web App will be always on"
  default = "true"
}

variable web_tier {
  type        = string
  description = "VM tier for the Web App plan"
  default = "B1"
}
