var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SmartContract, method, state, State } from 'o1js';
export class Square extends SmartContract {
    constructor() {
        super(...arguments);
        this.num = State();
    }
    init() {
        super.init();
        this.num.set(Field(3));
    }
    update(square) {
        const currentState = this.num.get();
        this.num.requireEquals(currentState);
        square.assertEquals(currentState.mul(currentState));
        this.num.set(square);
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Square.prototype, "num", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field]),
    __metadata("design:returntype", void 0)
], Square.prototype, "update", null);
//# sourceMappingURL=Square.js.map