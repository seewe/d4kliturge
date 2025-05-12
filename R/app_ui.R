#' The application User-Interface
#'
#' @param request Internal parameter for `{shiny}`.
#'     DO NOT REMOVE.
#' @import shiny
#' @import htmltools
#' @import jinjar
#' @noRd
app_ui <- function(request) {
  htmltools::tagList(
    # Leave this function for adding external resources
    golem_add_external_resources(),
    # Your application UI logic
    shiny.router::router_ui(
      shiny.router::route("/", mod_home_ui("home_1")),
      shiny.router::route(
        "tabledematiere",
        mod_tablematiere_ui("tablematiere_1")
      ),
      shiny.router::route(
        "chant",
        mod_chants_ui("chants_1")
      ),
      shiny.router::route(
        "preface",
        mod_preface_ui("preface_1")
      ),
      shiny.router::route(
        "anneeliturgique",
        mod_anneeLiturgique_ui("anneeLiturgique_1")
      ),
      shiny.router::route(
        "confidentialite",
        mod_politique_ui("politique_1")
      )
    )
  )
}

#' Add external Resources to the Application
#'
#' This function is internally used to add external
#' resources inside the Shiny application.
#'
#' @import shiny
#' @importFrom golem add_resource_path activate_js favicon bundle_resources
#' @noRd
golem_add_external_resources <- function() {
  golem::add_resource_path("www", app_sys("app/www"))
  golem::add_resource_path("templates", app_sys("app/templates"))

  htmltools::tags$head(
    favicon(),
    bundle_resources(
      path = app_sys("app/www"),
      app_title = "Liturge"
    ),
    bundle_resources(
      path = app_sys("app/templates"),
      app_title = "Liturge"
    )
  )
}
