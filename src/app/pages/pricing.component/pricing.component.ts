import {Component} from'@angular/core';
import {PaymentService} from '../../services/payment.service'


@Component({
    selector:'development',
    templateUrl: 'app/pages/pricing.Component/pricing.component.html',
    styleUrls:['app/pages/pricing.component/pricing.component.css']
})

export class PricingComponent{
    constructor(private paymentService:PaymentService)
    {
    }

    singleIncident(){
        this.paymentService.pay(99)
        .then(response=>  console.log("Payment is done"))
        .catch( response => console.log('got an error!'));
    }
}