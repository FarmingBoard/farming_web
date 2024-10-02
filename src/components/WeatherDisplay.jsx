import React, { useState, useEffect } from 'react'
import { Thermometer, Droplets } from "lucide-react"

export default function Component() {
    const [temperature, setTemperature] = useState(25)
    const [humidity, setHumidity] = useState(60)

    useEffect(() => {
        const interval = setInterval(() => {
            setTemperature(prev => Math.floor(Math.random() * (35 - 15 + 1) + 15))
            setHumidity(prev => Math.floor(Math.random() * (80 - 40 + 1) + 40))
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg max-w-sm w-full mx-4 transform transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Thời tiết hiện tại</h2>
                <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center space-y-2">
                        <div className="bg-red-100 rounded-full p-4">
                            <Thermometer className="h-10 w-10 text-red-500" />
                        </div>
                        <p className="text-4xl font-bold text-gray-800">{temperature}°C</p>
                        <p className="text-lg text-gray-600">Nhiệt độ</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="bg-blue-100 rounded-full p-4">
                            <Droplets className="h-10 w-10 text-blue-500" />
                        </div>
                        <p className="text-4xl font-bold text-gray-800">{humidity}%</p>
                        <p className="text-lg text-gray-600">Độ ẩm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}