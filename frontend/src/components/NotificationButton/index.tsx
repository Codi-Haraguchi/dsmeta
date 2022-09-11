import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../img/notification-icon.svg';

import './styles.css';

type Props = {
    saleId: number;
}

function handClick(id : number) {
    axios('${BASE_URL}/sales/${id}/notification')
    .then(Response => {
        toast.info("SMS enviado com sucesso");
    })
}

function NotificationButton( {saleId} : Props) {
    return (
        < div className=" dsmeta-red-btn " onClick={() => handClick(saleId)} >
            < img src={icon} alt="Notificar" />
        </div >
    )
}

export default NotificationButton;