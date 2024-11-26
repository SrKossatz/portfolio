from datetime import datetime

# This function will add the current date to the footer of the website
def date_footer(request):
    return {'date': datetime.now()} 