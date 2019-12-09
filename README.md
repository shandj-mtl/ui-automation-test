# Automation test for Matillion

A simple log in page with feedback form behind it.

To sign in, use the following (hard coded) values:
```
Username: l.jenkins
Password: hunter2
```

The feedback form has validation to check that all required items are present, and phone, email and postcodes all look like they should. It doesn't actually do anything with the values, it just takes the user to a 'submitted' page. This is good enough for the test.

## To run:
`docker-compose up --build -d`
