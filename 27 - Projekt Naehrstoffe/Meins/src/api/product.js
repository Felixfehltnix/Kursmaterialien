"use strict"

import axios from "axios"

const auth = {
    username: "mNsLkfeN1lSZdWiAhsgPGs7WJkB6BWI8g7sYjq8t"
}

export async function search(term) {
    const url = "https://api.nal.usda.gov/fdc/v1/search"
    const response = await axios
        .post(url, {generalSearchInput: term}, {auth})
    return response.data['foods']
}

export async function info(fdcId) {
    const url = "https://api.nal.usda.gov/fdc/v1/"
    const response = await axios
        .get(url + fdcId, {auth})
        return response.data
}

