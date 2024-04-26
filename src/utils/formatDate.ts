import moment from "moment";

export default function formatDate( date: string ){
    return moment(date).format("DD MMM, YYYY HH:mm");
}