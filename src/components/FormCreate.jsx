//import useState
import { useState } from "react";

//import API
import api from "@/services/api";

export default function FormCreate() {
    //define state
    const [code, setCode] = useState("");



    //state validation
    const [errors, setErrors] = useState([]);

    ;
    //method store post
    const storeCode = async (e) => {
        e.preventDefault();

        //init FormData
        const formData = new FormData();

        //append data
        formData.append("code", code);



        //send data with API
        await api
            .post("/api/attendance", formData)
            .then((response) => {
                console.log(response.status, response.data);
            })
            .then(() => {
                window.location.href = "/";
            })
            .catch((error) => {
                setErrors(error.response.data);
         });
    };


    return (
        <section className="">
            <div className="max-w-screen-xl mx-auto">
                <div className="mx-auto w-full p-4 md:p-8 max-w-[800px]">
                    <form onSubmit={storeCode}>
                        <div className="mb-5 pt-3">
                            <label className="form-label mb-3 block text-base font-medium text-gray-700">
                                Code
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="Tap Card"
                            />
                            {errors.name && (
                                <div className="alert alert-danger mt-2">
                                    {errors.name[0]}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}