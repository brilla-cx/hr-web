"use server";

export async function getUserInfo(email) {
  if (!email) return false;

  try {
    const url = `https://api.iterable.com/api/users/getByEmail?email=${email}`;

    const response = await fetch(url, {
      headers: {
        "Api-Key": process.env.ITERABLE_TOKEN,
      },
    });

    const result = await response.json();
    if (!result.user) {
      return { error: true, message: "No user found" };
    }
    return result.user;
  } catch (error) {
    console.error(error);
    return { error: true, message: "Failed to fetch user" };
  }
}

export async function updateUser(email, data) {
  if (!email) return false;

  try {
    const url = "https://api.iterable.com/api/users/update";

    const postdata = {
      email: email,
      dataFields: data,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": process.env.ITERABLE_TOKEN,
      },
      body: JSON.stringify(postdata),
    });

    const result = await response.json();

    if (result.code === "Success") {
      return { success: true, message: "User updated successfully" };
    }
    return { error: true, message: "Could not update user" };
  } catch (error) {
    console.error(error);
    return { error: true, message: "Failed to update user" };
  }
}
