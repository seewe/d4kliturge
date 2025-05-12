#' preface UI Function
#'
#' @description A shiny Module.
#'
#' @param id,input,output,session Internal parameters for {shiny}.
#'
#' @noRd
#'
#' @importFrom shiny NS tagList
mod_preface_ui <- function(id) {
  ns <- shiny::NS(id)
  shiny::uiOutput(ns("html_content"))
}

#' preface Server Functions
#'
#' @noRd
mod_preface_server <- function(input, output, session) {
  ns <- session$ns
  output$html_content <- shiny::renderUI({
    html_content <- render_jinja_template(
      "pagePreface.html",
      data = list(
        page_title = "PRÉFACE",
        preface_texte = as.character(preface_texte),
        search_chant_title = search_chant_title
      )
    )

    HTML(html_content)
  })
}

## To be copied in the UI
# mod_preface_ui("preface_1")

## To be copied in the server
# mod_preface_server("preface_1")
