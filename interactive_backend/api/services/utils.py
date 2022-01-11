import re
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)


def check_alpha_exists(data):
    """
        1.Checks whether the data contains atleast one alphabet or not.
        2. Returns the value based on expression.
    """
    logger.info(" Checking Alphabet Existence..")
    return_value = re.search('[a-zA-Z]', data)
    logger.info(" Returned value is : " + str(return_value))
    return return_value
