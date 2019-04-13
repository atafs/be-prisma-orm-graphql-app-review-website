# GET -------------------------------------------------
# http://localhost:4466/reviews/default
# -----------------------------------------------------

## all users (this application are the author property)
```
query {
  users {
    id
    username
  }
}
```

## all books
```
query {
  books {
    id
    title
    author
    isbn
    reviews {
      id
      text
      rating
      author {
        id
        username
      }
    }
  }
}
```

## all reviews
```
query {
  reviews {
    id
  }
}
```