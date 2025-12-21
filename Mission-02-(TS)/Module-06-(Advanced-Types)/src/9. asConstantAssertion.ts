
// as const instead in enum

/*
-------------------------- Some Behind the Scenes --------------------------
const userRoleSmall = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
} as const;
>>> 
{
    readonly Admin: "Admin",
    readonly Editor: "Editor",
    readonly Viewer: "Viewer"
}

typeof userRoleSmall
>>>
{
    Admin: "Admin",      // literal type
    Editor: "Editor",     // literal type
    Viewer: "Viewer"    // literal type
}

typeof userRoleSmall
>>>
"Admin" | "Editor" | "Viewer"

userRoleCapital[keyof typeof userRoleSmall]
>>>
userRoleCapital["Admin" | "Editor" | "Viewer"]
userRoleCapital["Admin"] >>> "ADMIN"

typeof userRoleCapital[keyof typeof userRoleSmall]
>>>
"ADMIN" | "EDITOR" | "VIEWER"
*/


// ------------------------------- Example-01 -------------------------------
const userRoleSmall = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
} as const;
// userRoleSmall.Admin = "Guest"  ->> we can not reassign now

const canEditSmall = (role: keyof typeof userRoleSmall) => {        // keyof can only be used on types
    if (role === userRoleSmall.Admin || role === userRoleSmall.Editor) {
        return true;
    }
    else return false;
}
console.log(canEditSmall(userRoleSmall.Viewer));
console.log(canEditSmall(userRoleSmall.Editor));


// ------------------------------- Example-02 -------------------------------
const userRoleCapital = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER"
} as const;

const canEditCapital = (role: typeof userRoleCapital[keyof typeof userRoleSmall]) => {       // keyof can only be used on types
    if (role === userRoleCapital.Admin || role === userRoleCapital.Editor) {
        return true;
    }
    else return false;
}
console.log(canEditCapital(userRoleCapital.Viewer));
console.log(canEditCapital(userRoleCapital.Editor));