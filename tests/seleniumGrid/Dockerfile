# Use official Selenium base image
FROM selenium/standalone-chrome:latest

# Set working directory
WORKDIR /app

# Copy test script into the container
COPY test.js .

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm

    # Install Selenium WebDriver
    RUN npm install selenium-webdriver

# Start the test script execution
CMD ["node", "test.js"]
