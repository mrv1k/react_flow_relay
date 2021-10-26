# Relay learning notes

## Helpful resources
+ [Introducing Relay and GraphQL](https://reactjs.org/blog/2015/02/20/introducing-relay-and-graphql.html)
+ [Relay for Visual Learners](http://sgwilym.github.io/relay-visual-learners/)

## Disclaimer:
This a personal paper notes transcript and likely won't make any sense.
If you still want to go ahead, here's some info to help you make sense of it:
1. Notes are taken chronologically, latter overrides former
2. *Italics stating with "Hmmm."* - thoughts written down

---

+ Relay - the next evolution of Flux pattern
+ Relay couples React with GraphQL
+ What are the benefits?
  + Allows query collocation
  + Simplifies GraphQL interactions
    + e.g.: Simplifies pagination by automatically handling cursor for you
+ Why does it exist?
  + GraphQL with React doesn't scale well

---

prefix: a beautifully written piece of documentation, pleasure to read

## [Thinking in GraphQL](https://relay.dev/docs/principles-and-architecture/thinking-in-graphql/)
+ Relay caches GraphQL responses as a Flat Map of Maps
+ Relay detects cache overlaps and avoids duplication
+ Relay achieves UI consistency by maintaining UI to ID mapping references
+ _Hmmm. Relay feels like it **relies** heavily on event driven architecture._


## [Thinking in Relay](https://relay.dev/docs/principles-and-architecture/thinking-in-relay/)

+ Fetching data for a view
  + 2 available options:
    + declare every dependency at root
      + problem is coupling
    + declare dependencies at component level
      + problem is rendering in stages (sometimes called waterfalls)
  + Relay uses the best of both approaches
    + declare at component level
    + combine (coalesce) in a single query
    + *and determines all this* statically!
+ Data masking - Relay provides access only to explicitly requested data
+ > \[Relay\] framework provide declarative data fetching.


## [GraphQL Clients](https://graphql.org/graphql-js/graphql-clients/)

+ Relay is a GraphQL Client
  + structured and opinionated
+ GraphQL Apollo is a GraphQL Client
  + flexible and community driven
+ [Why you might want a GraphQL client](https://www.apollographql.com/blog/frontend/why-you-might-want-a-graphql-client-e864050f789c/)?
  1. Easier GraphQL query execution
      + transport specific features like HTTP `headers`
      + middleware support
      + additional features like "subscriptions"
  2. Keep all UI components and queries in sync with each other
  3. Flexible caching
