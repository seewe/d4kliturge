#' politique UI Function
#'
#' @description A shiny Module.
#'
#' @param id,input,output,session Internal parameters for {shiny}.
#'
#' @noRd 
#'
#' @importFrom shiny NS tagList 
mod_politique_ui <- function(id) {
  ns <- NS(id)
  tagList(
 
  )
}
    
#' politique Server Functions
#'
#' @noRd 
mod_politique_server <- function(id){
  moduleServer(id, function(input, output, session){
    ns <- session$ns
 
  })
}
    
## To be copied in the UI
# mod_politique_ui("politique_1")
    
## To be copied in the server
# mod_politique_server("politique_1")
