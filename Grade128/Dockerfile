FROM python:3.14-slim
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
WORKDIR /app
COPY server.py *.html *.css *.js ./
EXPOSE 8000
CMD ["python", "server.py", "--host", "0.0.0.0", "--database", "/data/maplequest.sqlite3"]
