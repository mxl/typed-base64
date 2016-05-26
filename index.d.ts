declare namespace Base64Js {
    function toByteArray(b64: string):Uint8Array;

    function fromByteArray(uint8: Uint8Array):string;
}

export = Base64Js
