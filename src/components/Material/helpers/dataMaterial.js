import uni_semana1 from "../docs/unidad 1/Semana 1.pdf";
import uni_semana2 from "../docs/unidad 1/Semana 2.pdf";
import uni_semana3 from "../docs/unidad 1/Semana 3.pdf";
import uni_semana4 from "../docs/unidad 1/Semana 4.pdf";

import uni3_example1 from "../docs/unidad 3/Ejemplo de acrostico.pdf";

import uni4_example1 from "../docs/unidad 4/La metafora.pdf";

export const dataMaterial = [
    {
        id: 1,
        name: "Unidad 1 Investigamos noticias",
        docs: [
            {
                id: "un1_we1",
                week: ": semana 1",
                fileType: "PDF",
                options: [true,true],
                doc: uni_semana1
            },
            {
                id: "un2_we2",
                week: ": semana 2",
                fileType: "PDF",
                options: [true,true],
                doc: uni_semana2
            },
            {
                id: "un3_we3",
                week: ": semana 3",
                fileType: "PDF",
                options: [true,true],
                doc: uni_semana3
            },
            {
                id: "un4_we4",
                week: ": semana 4",
                fileType: "PDF",
                options: [true,true],
                doc: uni_semana4
            }
        ],
    },
    {
        id: 3,
        name: "Unidad 3 Investigamos acrosticos - ejemplo acrostico",
        docs: [
            {
                id: "un3_example1",
                week: "",
                fileType: "PDF",
                options: [true,true],
                doc: uni3_example1
            },
        ],
    },
    {
        id: 4,
        name: "Unidad 4 conozcamos los mitos - ejemplo metafora",
        docs: [
            {
                id: "un3_example1",
                week: "",
                fileType: "PDF",
                options: [true,true],
                doc: uni4_example1
            },
        ],
    }

];