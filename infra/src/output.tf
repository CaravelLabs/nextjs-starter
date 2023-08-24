output "web_app_name" { value = azurerm_linux_web_app.ch.name }
output "web_app_hostname" { value = azurerm_linux_web_app.ch.default_hostname }


output "application_insights_instrumentation_key" {
  value     = azurerm_application_insights.ch.instrumentation_key
  sensitive = true
}
output "application_insights_connection_string" {
  value     = azurerm_application_insights.ch.connection_string
  sensitive = true
}