import { USER_ROLES } from "../constants/userRoles";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";



// we are using fetch API to make an API call to create the admin user
// we are doing this because better-auth does not allow us to create only users directly using prisma client

// if we try to create a user directly using prisma client, then we will also have to create Account, Session, VerificationToken entries and other related data(of User) manually
// so, to avoid that, we are making an API call to the sign-up endpoint to create only the admin user without creating Account, Session, VerificationToken entries manually


async function seedAdmin() {
    try {
        console.log("Seeding admin user...");

        const adminData = {
            name: "Admin User2",
            email: process.env.ADMIN_USER_EMAIL!,
            role: USER_ROLES.ADMIN,
            password: process.env.ADMIN_USER_PASSWORD!,

            // here we can not set emailVerified to true directly because better-auth handles email verification internally
            // so, after creating the user via API call, we will UPDATE the emailVerified field to true
        }

        // Check if admin user already exists
        if (adminData.email) {
            const existingAdmin = await prisma.user.findUnique({
                where: {
                    email: adminData.email
                }
            })
            if (existingAdmin) {
                console.log("Admin user already exists. Skipping seeding.");
                throw new Error("Admin user already exists!!");
            }
        }

        // API call to create admin user  ; it must be run when the server is running
        const signUpAdmin = await fetch("http://localhost:5000/api/auth/sign-up/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": process.env.APP_URL!
            },
            body: JSON.stringify(adminData)
        });

        console.log("✅ Admin user created successfully");

        console.log(signUpAdmin);

        // we have to verify the email manually here so that the admin CAN LOGIN DIRECTLY without verifying email
        if (signUpAdmin.ok) {     // if the admin user is created successfully
            {
                await prisma.user.update({
                    where: {
                        email: adminData.email
                    },
                    data: {
                        emailVerified: true
                    }
                })
            }
        }

        console.log("SUCCESS!!")

    } catch (err) {
        console.error("Error seeding admin user:", err);
    }
}


seedAdmin();