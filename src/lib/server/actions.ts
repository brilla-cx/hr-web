"use server";

import { ITERABLE_LIST_ID, ITERABLE_TOKEN } from "@/lib/constants";

import { SignupData } from "../validation/signupStepperForm";

export async function addUserToList(email: string) {
  if (!email) return false;

  try {
    const url = "https://api.iterable.com/api/lists/subscribe";

    const postdata = {
      listId: ITERABLE_LIST_ID,
      subscribers: [
        {
          email: email,
          userId: email,
        },
      ],
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": ITERABLE_TOKEN,
      },
      body: JSON.stringify(postdata),
    });

    const result = await response.json();
    if (!result.successCount) {
      console.error(result);
      return { error: true, message: "Could not add user to the list" };
    }
    return {
      success: true,
      message: "User subscribed successfully!",
      result,
    };
  } catch (error) {
    console.error(error);
    return { error: true, message: "Something went wrong!" };
  }
}

export async function getUserInfo(email: string) {
  if (!email) return false;

  try {
    const url = `https://api.iterable.com/api/users/getByEmail?email=${email}`;

    const response = await fetch(url, {
      headers: {
        "Api-Key": ITERABLE_TOKEN,
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

export async function updateUser(data: SignupData) {
  if (!data.email) return false;

  try {
    const url = "https://api.iterable.com/api/users/update";

    const postdata = {
      email: data.email,
      dataFields: data,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": ITERABLE_TOKEN,
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
