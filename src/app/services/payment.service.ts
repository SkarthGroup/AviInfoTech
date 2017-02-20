import { Injectable } from '@angular/core';

@Injectable()

export class PaymentService {
    pay(amount: number): Promise<any> {
        return new Promise<any>(resolve => { setTimeout(() => { resolve(true); }, 500) });
    }
}
