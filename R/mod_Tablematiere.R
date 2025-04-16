#' Tablematiere UI Function
#'
#' @description A shiny Module.
#'
#' @param id,input,output,session Internal parameters for {shiny}.
#'
#' @noRd 
#'
#' @importFrom shiny NS tagList 
mod_Tablematiere_ui <- function(id) {
  ns <- NS(id)
  tagList(
 
  )
}
    
#' Tablematiere Server Functions
#'
#' @noRd 
mod_Tablematiere_server <- function(id){
  moduleServer(id, function(input, output, session){
    ns <- session$ns
 
  })
}
    
## To be copied in the UI
# mod_Tablematiere_ui("Tablematiere_1")
    
## To be copied in the server
# mod_Tablematiere_server("Tablematiere_1")
