# **Personal Portfolio**
Welcome to my portfolio! This repository presents the source code of my personal portfolio page, developed to highlight my journey as a programmer, and my knowledge in web development.
---
## **✨ About Me**
I am a fullstack developer focusing on back-end, passionate about technology and creative solutions. I have experience in developing robust and scalable applications using **Python** and **Django**, as well as skills in **HTML**, **CSS**, **JavaScript** and **Tailwind CSS** to create functional and attractive web interfaces.
---
## **🌟 Technologies and Tools**
- **Languages:** Python, JavaScript
- **Frameworks:** Django, Tailwind CSS
- **Frontend:** HTML5, CSS3
- **Others:** Code best practices, version control with Git
---
## **📖 Portfolio Features**
- Professional presentation focusing on:
 - Technical skills and tools I master.
 - Most relevant projects I've developed.
 - Contact information and social media links.
- Responsive design, optimized for mobile devices and desktops.
- Elegant and minimalist interface, developed with **Tailwind CSS**.

This guide will help you set up and run the Portfolio CMS project locally.

## **Prerequisites**

- Python 3.x
- Django
- Git
- pip (Python package installer)

## Installation Steps

### 1. Clone the Repository

```bash
git clone
https://github.com/SrKossatz/portfolio.git
```
### 2. Create and active the virtual environment

- On windows
```bash
python -m venv venv
venv\Scripts\activate
```

-MacOS and Linux
```bash
python -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Create a superuser

```bash
python manage.py createsuperuser
```
### 5. Run development server

```bash
python manage.py runserver
```

## Notes

- The admin panel can be accessed at: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/).
- Make sure to activate the virtual environment when running Django-related commands.
- Access the project at: [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

## This project is still under development, and some features are not fully implemented yet. Updates will be made continuously.

