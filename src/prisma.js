import { Prisma } from 'prisma-binding'

// prisma object
const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
})

// prisma.exists.User({
//     id: "cjt92nxg6015x0752envn53vp",
//     author: {
//         id: ""
//     }
// }).then(exists => {
//     console.log('Exists: ', exists)
// })

// replaced call back functions inside of promisses by async functions
const createPostForUser = async (authorId, data) => {
  // verify that the user exists
  const userExists = await prisma.exists.User({ id: authorId })

  if (!userExists) {
    throw new Error('User not found!!')
  }

  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorId
          }
        }
      }
    },
    '{ author { id name posts { id title published } } }'
  )

  const { author } = post
  return author
}

const updatePostForUser = async (postId, data) => {
  // verify that the user exists
  const postExists = await prisma.exists.Post({ id: postId })

  if (!postExists) {
    throw new Error('Post not found!!')
  }

  const post = await prisma.mutation.updatePost(
    {
      where: {
        id: postId
      },
      data
    },
    '{ author { id name posts { id title published } } }'
  )

  const { author } = post
  return author
}

/* call the async functions */
// createPostForUser('cju3u4lbt00c60752xuuqms6j', {
//   title: 'great books to read',
//   body: 'the art of war',
//   published: true
// })
//   .then(user => {
//     console.log(JSON.stringify(user, undefined, 4))
//   })
//   .catch(error => {
//     console.log('Error: ', error.message)
//   })

updatePostForUser('cjt92pawb016z0752rremxqaf', { published: false })
  .then(user => {
    console.log(JSON.stringify(user, undefined, 4))
  })
  .catch(error => {
    console.log('error', error.message)
  })

/* prisma.mutation */
// prisma.mutation.createPost({
//     data: {
//         title: "Graphql 101",
//         body: "New body",
//         published: false,
//         author: {
//             connect: {
//                 id: "cju3u4lbt00c60752xuuqms6j"
//             }
//         }
//     }
// }, '{ id title body published }').then(data => {
//     console.log(data)

//     return prisma.query.users(null, '{ id name posts { id title } }').then(data => {
//         console.log('Query Users:', JSON.stringify(data, undefined, 4))
//     })
// })

// prisma.mutation.updatePost({
//     where: {
//         id: "cjt92pawb016z0752rremxqaf"
//     },
//     data: {
//         body: "This is how to get with GraphQL...",
//         published: true
//     }
// },'{ id }').then(data => {
//     return prisma.query.posts(null), '{ id title body publihed }'
// }).then(data => {
//     console.log(data)
// })

/* prisma.subscripion */

/* prisma.exists */
