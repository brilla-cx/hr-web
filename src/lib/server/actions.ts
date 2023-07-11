"use server";

import { ITERABLE_LIST_ID, ITERABLE_TOKEN } from "@/lib/constants";

async function fetchIterableAPI(url: string, method: string, body?: object) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Api-Key": ITERABLE_TOKEN,
    };

    // eslint-disable-next-line no-undef
    const options: RequestInit = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong!");
  }
}

export async function addUserToList(email: string) {
  if (!email) return false;
  try {
    const url = "https://api.iterable.com/api/lists/subscribe";
    const postdata = {
      listId: ITERABLE_LIST_ID,
      subscribers: [{ email, userId: email }],
    };
    const result = await fetchIterableAPI(url, "POST", postdata);
    if (!result.successCount)
      return { error: true, message: "Could not add user to the list" };
    return { success: true, message: "User subscribed successfully!", result };
  } catch (error) {
    console.error(error);
    return { error: true, message: "Something went wrong!" };
  }
}

export async function getUserInfo(email: string) {
  if (!email) return false;

  try {
    const url = `https://api.iterable.com/api/users/${email}`;
    const result = await fetchIterableAPI(url, "GET");

    if (!result.user) {
      return { error: true, message: "No user found" };
    }
    return result.user;
  } catch (error) {
    console.error(error);
    return { error: true, message: "Failed to fetch user" };
  }
}

export async function updateUser(
  email: string,
  data: {
    firstName: string;
    topic1: string;
    topic2: string;
    topic3: string;
    topic4: string;
  }
) {
  const postdata = {
    email: email,
    dataFields: data,
  };

  try {
    const url = "https://api.iterable.com/api/users/update";
    const result = await fetchIterableAPI(url, "POST", postdata);

    if (result.code === "Success") {
      return { success: true, message: "User updated successfully" };
    }
    return { error: true, message: "Could not update user" };
  } catch (error) {
    console.error(error);
    return { error: true, message: "Failed to update user" };
  }
}
