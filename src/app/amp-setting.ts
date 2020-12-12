export interface AmpSetting {
    id: number;
    amplifier: string;
    title: string;
    description: string;
    input?: number;
    bright?: boolean;
    crunch?: boolean;
    rhythmPreamp?: number;
    rhythmPostamp?: number;
    leadPreamp?: number;
    leadPostamp?: number;
    eqLow?: number;
    eqMid?: number;
    eqHigh?: number;
    resonance?: number;
    presence?: number;
    reverb?: number;
}