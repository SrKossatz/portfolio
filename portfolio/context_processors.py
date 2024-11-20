from datetime import datetime


def date_footer(request):
    return {'date': datetime.now()} 