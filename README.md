# actors, React Forms & JSON Web Tokens

Coding alongside lecture

- Controlled Forms
  - links each input to a useState
  - all event_listeners get passed in an event
  - we can use event.target to get the element where the event occured
  - we can use event.target.value on an input to get what the user typed in

- Setting up a Form
  - onSubmit={(function)}: will run the function when the form is submitted

  - Setting an Input
    - create a useState to save the value that the user will type in
    - set the value of the input to the new useState variable
    - set the onChange to a function that will run when the user types into the input:
          setUseState(event.target.value)

# Calling an API

- by default, 'fetch' will make a GET request
- 'fetch' takes in an OPTIONAL second argument, which will be an object
      fetch(URL, { key: value})
    - KEYS are optional for this object
      method: 'POST'/'GET'/etc
      headers: { 
        'Content-Type': "application/json", 
        etc
      }
      body: JSON.stringify({
        name: "Barry",
        email: flash@aol.com,
        etc
      })

# JSON Web Tokens ( JWT )

- JWTs are credentials that contain a header, payload ( the actual data ), and a signature





