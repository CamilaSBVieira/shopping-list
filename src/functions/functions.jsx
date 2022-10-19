
export default function expiresAt() {
    const data = new Date();
    data.setDate(data.getDate() + 1);
    const dia = data.getDate();
    return dia;
}
