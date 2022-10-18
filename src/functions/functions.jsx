
export default function expiresAt() {
    const data = new Date(new Date().setUTCHours(0,0,0,0));
    data.setDate(data.getDate() + 1);
    return data;
}
