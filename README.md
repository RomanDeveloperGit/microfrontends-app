# Microfrontends App

This project connects two separate web applications: one built with React and the other with Solid. The communication between these applications is achieved through an event bus, which is accessed from the Host App. Please note that this application does not have any practical use for end-users; it was created solely for the purpose of studying micro-frontends and enabling communication between them.

## Purpose

The primary goal of this project is to establish communication between micro-frontends developed using different libs and frameworks (React and Solid). This communication is facilitated through an event bus that is accessible from the Host App. This simple setup allows the two frontends to interact with each other.

## Note on Shared MobX Storage

There was an initial desire to create a shared MobX storage for both the React and Solid applications. However, it was observed that when implementing the shared storage, only the React application continued to work as expected, while the Solid application stopped listening to bus events. Due to time constraints and the basic goal of achieving communication between the frontends being met, further development of the shared MobX storage was not pursued.

## Viewing Your Modifications

To view the modifications you've made, please execute the following script:

```bash
npm run app:build-and-preview
