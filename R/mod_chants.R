#' chants UI Function
#'
#' @description A shiny Module.
#'
#' @param id,input,output,session Internal parameters for {shiny}.
#'
#' @noRd
#'
#' @importFrom shiny NS tagList
mod_chants_ui <- function(id) {
  ns <- shiny::NS(id)
  shiny::uiOutput(ns("html_content"))
}

#' chants Server Functions
#'
#' @noRd
mod_chants_server <- function(input, output, session, chant_html, RV = rv) {
  ns <- session$ns
  output$html_content <- shiny::renderUI({
    req(RV()$ch_selected)
    HTML(chant_html[[RV()$ch_selected]])
  })
}

## To be copied in the UI
# callModule(mod_chants_ui, "chants_1")

## To be copied in the server
# callModule(mod_chants_server, "chants_1")
