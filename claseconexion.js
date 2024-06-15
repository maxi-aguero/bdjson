export class cconexion {
    constructor(binid, masterkey) {
        this.binid = binid;
        this.masterkey = masterkey;
        this.apiurl = `https://api.jsonbin.io/v3/b/${binid}/latest`;
    }

    getbinid() {
        return this.binid;
    }

    getmasterkey() {
        return this.masterkey;
    }

    getapiurl() {
        return this.apiurl;
    }

    async checkconexion() {
        let exito = false;
        let data = null;
        
        try {
            const response = await fetch(this.apiurl, {
                headers: {
                    'X-Master-Key': this.masterkey
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error de red: ${response.statusText}`);
            }
    
             data = await response.json();
            console.log('Datos recibidos:', data); // Mostrar datos en la consola
            exito = true;
    
        } catch (error) {
            console.error('Error al obtener datos desde JSONBin:', error);
            throw error; // Propagar el error para manejarlo externamente si es necesario
        }
    
        return {exito,data};
    }
    

    
}
