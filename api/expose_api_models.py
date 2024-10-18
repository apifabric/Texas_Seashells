from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Shell, method_decorators= method_decorators)
    api.expose_object(database.models.ShellCollectionTime, method_decorators= method_decorators)
    api.expose_object(database.models.ShellColor, method_decorators= method_decorators)
    api.expose_object(database.models.ShellConservationStatu, method_decorators= method_decorators)
    api.expose_object(database.models.ShellHistoricalUse, method_decorators= method_decorators)
    api.expose_object(database.models.ShellLocation, method_decorators= method_decorators)
    api.expose_object(database.models.ShellSize, method_decorators= method_decorators)
    api.expose_object(database.models.ShellSpecy, method_decorators= method_decorators)
    api.expose_object(database.models.ShellCollectionRecord, method_decorators= method_decorators)
    api.expose_object(database.models.ShellCollector, method_decorators= method_decorators)
    api.expose_object(database.models.ShellPhoto, method_decorators= method_decorators)
    api.expose_object(database.models.ShellScientificStudy, method_decorators= method_decorators)
    return api
