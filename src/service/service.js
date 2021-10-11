import axios from "axios";
import {
    API_KEY,
    DELETE_URL,
    FAVORITE_URL,
    UPLOAD_URL,
    CAT_VOTE_URL,
    SUB_ID
} from "../constants/common";

const getResponse = (status, data) => ({
    status,
    data,
});

const uploadImage = async (image_file) => {
    try {
        let formData = new FormData();
        formData.append('file', image_file);
        axios.defaults.headers.common['x-api-key'] = API_KEY;
        let response = await axios.post(UPLOAD_URL, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return getResponse('SUCCESS', response.data);
    } catch (error) {
        return getResponse('FAILED', error.response.data);
    }
};

const likeCat = async (cat) => {
    const data = {
        image_id: cat.id,
    };
    axios.defaults.headers.common['x-api-key'] = API_KEY;
    const response = await axios.post(FAVORITE_URL, data, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response;
};

const deleteFavorite = async ({ favID }) => {
    axios.defaults.headers.common['x-api-key'] = API_KEY;
    return await axios.delete(DELETE_URL + favID);
};

const voteCat = async (cat, value) => {
    const data = {
        image_id: cat.id,
        value,
        sub_id: SUB_ID
    };
    axios.defaults.headers.common['x-api-key'] = API_KEY;
    return await axios.post(CAT_VOTE_URL, data, {
        headers: { 'Content-Type': 'application/json' },
    });
};

const getCatScore = async () => {
    axios.defaults.headers.common['x-api-key'] = API_KEY;
    return await axios.get(CAT_VOTE_URL, { params: { sub_id: SUB_ID } });
};

export { uploadImage, likeCat, deleteFavorite, voteCat, getCatScore };



