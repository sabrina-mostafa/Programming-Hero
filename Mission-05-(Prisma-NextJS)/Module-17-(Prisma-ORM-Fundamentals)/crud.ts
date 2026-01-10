import { prisma } from "./lib/prisma";

// CRUD
async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: 'Abbas Ali 2',
    //         email: 'abbasali2@gmail.com'
    //     }
    // })
    // console.log('Created user:', createUser);

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: 'this is a title',
    //         content: 'this is the content',
    //         authorId: 1
    //     }
    // })
    // console.log('Created post:', createPost);

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: 'this is a bio',
    //         dateOfBirth: new Date('12-05-1998'),
    //         userId: 1
    //     }
    // })
    // console.log('Cerated profile:', createProfile);

    // retrieve all user
    const users = await prisma.user.findMany({
        // include: {
        //     posts: true,
        //     profile: true
        // }

        select: {
            id: true,
            name: true,
            profile: true
        }
    });
    // console.log(users);
    // console.dir(users, {depth: Infinity});



    // update profile
    // const updateProfile = await prisma.profile.update({
    //     where: {
    //         userId: 1
    //     },
    //     data: {
    //         bio: 'Updated bio',
    //         dateOfBirth: '1988-10-04T18:00:00.000Z'
    //     },
    //     select: {
    //         id: true,
    //         bio: true,
    //         user: {
    //             select: {
    //                 name: true,
    //                 email: true
    //             }
    //         }
    //     }
    // })
    // console.log('Updated user profile:', updateProfile);



    // delete user
    // const deleteUser = await prisma.user.delete({
    //     where: {
    //         id: 3
    //     }
    // });
    // console.log('Deleted user:', deleteUser);


    // retrieve user by id
    const getUserById = await prisma.user.findUnique({
        where: {
            id: 3
        },
        include: {
            posts: true,
            profile: true
        }
    });
    // console.log('Retrieved user:', getUserById);



    // upsert (create or update)
    // const upsertUser = await prisma.user.upsert({
    //     where: {
    //         email: 'abbasali222@gmail.com'
    //     },
    //     update: {
    //         email: 'abbasali55@gmail.com'
    //     },
    //     create: {
    //         name: 'Abbas Ali 555',
    //         email: 'abbasali555@gmail.com'
    //     }
    // })
    // console.log('user that is upsert:', upsertUser);

}

run();