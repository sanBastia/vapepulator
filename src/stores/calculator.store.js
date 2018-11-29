import {
  observable, action, decorate, computed,
} from 'mobx';

class CalculatorStore {
  calculatorState = {

    fadeForCalcBody: true,

    fadeForResBody: false,

    showResult: false,

    efficientValue: 85,

    funfactOpen: false,

    batteryWattValue: 0,

    batteryCount: 0,

    batteryTypeValue: 0,

    batteryTypeCdc: 0,

    batteryType: new Map([
      ['Samsung 20S 2000 mAh 18650', 30],
      ['LG HB6 1500 mAh 18650', 30],
      ['Sony VTC 5A 2500 mAh 18650', 25],
      ['Samsung 25R 2500 mAh 18650', 20],
      ['Efest Purple 3000 mAh 20700', 30],
      ['Vapcell 3000 mAh 20700', 20],
      ['Golisi S32 3200 mAh 20700', 25],
      ['Efes 3700 mAh 21700', 30],
      ['Golisi S35 3750 mAh 21700', 30],
      ['AWT Purple 2600 mAh 18650', 20],
      ['AWT Yellow 2600 mAh 18650', 20],
      ['AWT Red Black 2600 mAh 18650', 20],
      ['AWT Red 3000 mAh 18650', 15],
      ['AWT Black 3000 mAh 18650', 15],
      ['Basen 3100 mAh 18650', 10],
      ['Basen 3500 mAh 18650', 10],
      ['Blackcell 3100 mAh 18650', 20],
      ['Blackcell 3100 mAh 18650', 15],
      ['Brilipower Green 2600 mAh 18650', 20],
      ['Efest Purple 2100 mAh 18650', 20],
      ['Efest Purple 2100 mAh 18650', 20],
      ['Efest Purple 2600 mAh 18650', 20],
      ['Efest Purple 2800 mAh 18650', 20],
      ['Efest Purple 2900 mAh 18650', 15],
      ['Efest Purple 3000 mAh 18650', 20],
      ['Efest Purple 3500 mAh 18650', 12],
      ['Efest Metalic Purple 2500 mAh 18650', 20],
      ['Efest Metalic Purple 2900 mAh 18650', 20],
      ['Efest Metalic Purple 3000 mAh 18650', 15],
      ['Golisi Gold G30 3000 mAh 18650', 20],
      ['Golisi Black S26 2600 mAh 18650', 25],
      ['Golisi Black S30 3000 mAh 18650', 22],
      ['Imren Orange 2100 mAh 18650', 20],
      ['Imren Yellow 2000 mAh 18650', 20],
      ['Imren Purple 2500 mAh 18650', 20],
      ['Imren Gold 2500 mAh 18650', 20],
      ['Imren Purple 3000 mAh 18650', 17],
      ['Imren Gold 3000 mAh 18650', 15],
      ['Imren Gold 3000 mAh 18650', 20],
      ['Omren Green 3200 mAh 18650', 10],
      ['Imren Yellow 3400 mAh 18650', 12],
      ['Imren Green 3500 mAh 18650', 10],
      ['Imren Leopard 2600 mAh 18650', 20],
      ['Kdest Black 2500 mAh 18650', 20],
      ['Kdest Beige/Krem 2800 mAh 18650', 10],
      ['Kdest White 3100 mAh 18650', 15],
      ['Kdest Black 3500 mAh 18650', 10],
      ['LG HB2 1500 mAh 18650', 30],
      ['LG HB4 (semua warna) 1500 mAh 18650', 30],
      ['LG HB6 (Semua warna) 1500 mAh 18650', 30],
      ['LG HB7 1500 mAh 18650', 15],
      ['LG HD2 2000 mAh 18650', 20],
      ['LG HD2C 2100 mAh 18650', 20],
      ['LG HD4 2100 mAh 18650', 25],
      ['LG HE2 2500 mAh 18650', 20],
      ['LG HE4 2500 mAh 18650', 20],
      ['LG HG2 3000 mAh 18650', 20],
      ['LG MH1 3200 mAh 18650', 10],
      ['LG MJ1 3500 mAh 18650', 10],
      ['MXJO Yellow 1600 mAh 18650', 21],
      ['MXJO Yellow 2500 mAh 18650', 20],
      ['MXJO Yellow 2600 mAh 18650', 19],
      ['MXJO Yellow 2800 mAh 18650', 20],
      ['MXJO Yellow 2900 mAh 18650', 10],
      ['MXJO Yellow 3000 mAh 18650', 15],
      ['MXJO Yellow 3000 mAh 18650', 15],
      ['MXJO Yellow 3500 mAh 18650', 11],
      ['MXJO Green 3500 mAh 18650', 11],
      ['Panasonic NCR18650A 3100 mAh 18650', 6],
      ['Panasonic NCR18650B 3200 mAh 18650', 5],
      ['Panasonic NCR18650BD 3000 mAh 18650', 10],
      ['Panasonic CGR18650CH 2250 mAh 18650', 10],
      ['Panasonic NCR18650GA 3300 mAh 18650', 10],
      ['Panasonic NCR18650PF 2680 mAh 18650', 10],
      ['Samsung 15L 1500 mAh 18650', 18],
      ['Samsung 15M 1500 mAh 18650', 23],
      ['Samsung 20Q 2000 mAh 18650', 15],
      ['Samsung 20R 2000 mAh 18650', 22],
      ['Samsung 20S 2000 mAh 18650', 30],
      ['Samsung 22P 2050 mAh 18650', 10],
      ['Samsung 24S 2400 mAh 18650', 25],
      ['Samsung 25R Blue/Green 2500 mAh 18650', 20],
      ['Samsung 25S 2500 mAh 18650', 25],
      ['Samsung 26F 2600 mAh 18650', 5],
      ['Samsung 30Q 3000 mAh 18650', 15],
      ['Samsung 35E 3500 mAh 18650', 8],
      ['Sigelei 2500 mAh 18650', 20],
      ['Sony VC 7 3500 mAh 18650', 8],
      ['Sony VT4 2000 mAh 18650', 22],
      ['Sony VTC 4 2100 mAh 18650', 23],
      ['Sony VTC 5 2600 mAh 18650', 20],
      ['Sony VTC 5A 2500 mAh 18650', 25],
      ['Sony VTC 6 3000 mAh 18650', 15],
      ['Vapcell Green 2000 mAh 18650', 28],
      ['Vapcell Black 2000 mAh 18650', 30],
      ['Vapcell Purple 2400 mAh 18650', 25],
      ['Vapcell green 2600 mAh 18650', 25],
      ['Vapcell Black 2800 mAh 18650', 25],
      ['Vapcell Purple 3000 mAh 18650', 20],
      ['Vappower Green 2500 mAh 18650', 20],
      ['Vappower Green 300 mAh 18650', 15],
      ['XXX 3000 mAh 18650', 15],
      ['XXX 3100 mAh 18650', 15],
      ['VRK 3000 mAh 18650', 20],
    ]),
  }

  get getResult() {
    return Math.round(this.calculatorState.batteryCount * this.calculatorState.batteryTypeCdc * 3.2 * (this.calculatorState.efficientValue / 100));
  }

  // ini harus di refactor, harus temukan cara reset dengan createViewModel dari mobX
  handleReset = () => {
    this.calculatorState = {
      fadeForCalcBody: true,

      fadeForResBody: false,

      showResult: false,

      efficientValue: 85,

      funfactOpen: false,

      batteryWattValue: 0,

      batteryCount: 0,

      batteryTypeValue: 0,

      batteryTypeCdc: 0,

      batteryType: new Map([
        ['Samsung 20S 2000 mAh 18650', 30],
        ['LG HB6 1500 mAh 18650', 30],
        ['Sony VTC 5A 2500 mAh 18650', 25],
        ['Samsung 25R 2500 mAh 18650', 20],
        ['Efest Purple 3000 mAh 20700', 30],
        ['Vapcell 3000 mAh 20700', 20],
        ['Golisi S32 3200 mAh 20700', 25],
        ['Efes 3700 mAh 21700', 30],
        ['Golisi S35 3750 mAh 21700', 30],
        ['AWT Purple 2600 mAh 18650', 20],
        ['AWT Yellow 2600 mAh 18650', 20],
        ['AWT Red Black 2600 mAh 18650', 20],
        ['AWT Red 3000 mAh 18650', 15],
        ['AWT Black 3000 mAh 18650', 15],
        ['Basen 3100 mAh 18650', 10],
        ['Basen 3500 mAh 18650', 10],
        ['Blackcell 3100 mAh 18650', 20],
        ['Blackcell 3100 mAh 18650', 15],
        ['Brilipower Green 2600 mAh 18650', 20],
        ['Efest Purple 2100 mAh 18650', 20],
        ['Efest Purple 2100 mAh 18650', 20],
        ['Efest Purple 2600 mAh 18650', 20],
        ['Efest Purple 2800 mAh 18650', 20],
        ['Efest Purple 2900 mAh 18650', 15],
        ['Efest Purple 3000 mAh 18650', 20],
        ['Efest Purple 3500 mAh 18650', 12],
        ['Efest Metalic Purple 2500 mAh 18650', 20],
        ['Efest Metalic Purple 2900 mAh 18650', 20],
        ['Efest Metalic Purple 3000 mAh 18650', 15],
        ['Golisi Gold G30 3000 mAh 18650', 20],
        ['Golisi Black S26 2600 mAh 18650', 25],
        ['Golisi Black S30 3000 mAh 18650', 22],
        ['Imren Orange 2100 mAh 18650', 20],
        ['Imren Yellow 2000 mAh 18650', 20],
        ['Imren Purple 2500 mAh 18650', 20],
        ['Imren Gold 2500 mAh 18650', 20],
        ['Imren Purple 3000 mAh 18650', 17],
        ['Imren Gold 3000 mAh 18650', 15],
        ['Imren Gold 3000 mAh 18650', 20],
        ['Omren Green 3200 mAh 18650', 10],
        ['Imren Yellow 3400 mAh 18650', 12],
        ['Imren Green 3500 mAh 18650', 10],
        ['Imren Leopard 2600 mAh 18650', 20],
        ['Kdest Black 2500 mAh 18650', 20],
        ['Kdest Beige/Krem 2800 mAh 18650', 10],
        ['Kdest White 3100 mAh 18650', 15],
        ['Kdest Black 3500 mAh 18650', 10],
        ['LG HB2 1500 mAh 18650', 30],
        ['LG HB4 (semua warna) 1500 mAh 18650', 30],
        ['LG HB6 (Semua warna) 1500 mAh 18650', 30],
        ['LG HB7 1500 mAh 18650', 15],
        ['LG HD2 2000 mAh 18650', 20],
        ['LG HD2C 2100 mAh 18650', 20],
        ['LG HD4 2100 mAh 18650', 25],
        ['LG HE2 2500 mAh 18650', 20],
        ['LG HE4 2500 mAh 18650', 20],
        ['LG HG2 3000 mAh 18650', 20],
        ['LG MH1 3200 mAh 18650', 10],
        ['LG MJ1 3500 mAh 18650', 10],
        ['MXJO Yellow 1600 mAh 18650', 21],
        ['MXJO Yellow 2500 mAh 18650', 20],
        ['MXJO Yellow 2600 mAh 18650', 19],
        ['MXJO Yellow 2800 mAh 18650', 20],
        ['MXJO Yellow 2900 mAh 18650', 10],
        ['MXJO Yellow 3000 mAh 18650', 15],
        ['MXJO Yellow 3000 mAh 18650', 15],
        ['MXJO Yellow 3500 mAh 18650', 11],
        ['MXJO Green 3500 mAh 18650', 11],
        ['Panasonic NCR18650A 3100 mAh 18650', 6],
        ['Panasonic NCR18650B 3200 mAh 18650', 5],
        ['Panasonic NCR18650BD 3000 mAh 18650', 10],
        ['Panasonic CGR18650CH 2250 mAh 18650', 10],
        ['Panasonic NCR18650GA 3300 mAh 18650', 10],
        ['Panasonic NCR18650PF 2680 mAh 18650', 10],
        ['Samsung 15L 1500 mAh 18650', 18],
        ['Samsung 15M 1500 mAh 18650', 23],
        ['Samsung 20Q 2000 mAh 18650', 15],
        ['Samsung 20R 2000 mAh 18650', 22],
        ['Samsung 20S 2000 mAh 18650', 30],
        ['Samsung 22P 2050 mAh 18650', 10],
        ['Samsung 24S 2400 mAh 18650', 25],
        ['Samsung 25R Blue/Green 2500 mAh 18650', 20],
        ['Samsung 25S 2500 mAh 18650', 25],
        ['Samsung 26F 2600 mAh 18650', 5],
        ['Samsung 30Q 3000 mAh 18650', 15],
        ['Samsung 35E 3500 mAh 18650', 8],
        ['Sigelei 2500 mAh 18650', 20],
        ['Sony VC 7 3500 mAh 18650', 8],
        ['Sony VT4 2000 mAh 18650', 22],
        ['Sony VTC 4 2100 mAh 18650', 23],
        ['Sony VTC 5 2600 mAh 18650', 20],
        ['Sony VTC 5A 2500 mAh 18650', 25],
        ['Sony VTC 6 3000 mAh 18650', 15],
        ['Vapcell Green 2000 mAh 18650', 28],
        ['Vapcell Black 2000 mAh 18650', 30],
        ['Vapcell Purple 2400 mAh 18650', 25],
        ['Vapcell green 2600 mAh 18650', 25],
        ['Vapcell Black 2800 mAh 18650', 25],
        ['Vapcell Purple 3000 mAh 18650', 20],
        ['Vappower Green 2500 mAh 18650', 20],
        ['Vappower Green 300 mAh 18650', 15],
        ['XXX 3000 mAh 18650', 15],
        ['XXX 3100 mAh 18650', 15],
        ['VRK 3000 mAh 18650', 20],
      ]),

    };
  }

  handleOpenFunFact = () => {
    this.calculatorState.funfactOpen = !this.calculatorState.funfactOpen;
  }

  handleChangeSlider = (value) => {
    this.calculatorState.efficientValue = value;
  };

  handleBatteryCount = (batteryCount) => {
    this.calculatorState.batteryCount = batteryCount;
  }

  handleBatteryWattValue = (batteryWattValue) => {
    this.calculatorState.batteryWattValue = batteryWattValue;
  }

  handleBatteryTypeChange = (batteryType) => {
    this.calculatorState.batteryTypeValue = batteryType;
  };

  handleBatteryCdc = (batteryType) => {
    this.calculatorState.batteryTypeCdc = this.calculatorState.batteryType.get(`${batteryType}`);
  };

  handleCalculating = () => {
    this.calculatorState.showResult = !this.calculatorState.showResult;
    this.calculatorState.fadeForResBody = !this.calculatorState.fadeForResBody;
  };
}


export default decorate(CalculatorStore, {
  calculatorState: observable,
  handleOpenFunFact: action,
  handleChangeSlider: action,
  handleBatteryCount: action,
  handleBatteryWattValue: action,
  handleBatteryTypeChange: action,
  handleBatteryCdc: action,
  handleCalculating: action,
  handleReset: action,
  getResult: computed,
});
