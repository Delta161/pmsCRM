FROM postgres:15

# Set environment variables for the default PostgreSQL user and password
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=password

# Create directories for database initialization scripts
RUN mkdir -p /docker-entrypoint-initdb.d

# Copy custom initialization scripts
COPY init-scripts/ /docker-entrypoint-initdb.d/

# Expose PostgreSQL default port
EXPOSE 5432
