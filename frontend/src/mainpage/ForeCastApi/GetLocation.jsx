import React, { useState, useEffect } from 'react';
import { useIP } from '../../common/Context';
export default function getLocation() {
  const [IpAddress, setIpAddress] = useState('');
  const [geoInfo, setGeoInfo] = useState({});
  const { updateIP, updateCity} = useIP();

  
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };
    fetchIpAddress();
  }, []);

  useEffect(() => {
    const fetchGeoInfo = async () => {
      try {
        const response = await fetch(`https://ipapi.co/${IpAddress}/json/`);
        const data = await response.json();
        setGeoInfo(data);
      } catch (error) {
        console.error('Error fetching Geo information:', error);
      }
    };
    if (IpAddress) {
      updateIP(IpAddress);
      console.log(IpAddress);
      fetchGeoInfo();
      
    }
  }, [IpAddress]);

  const cityName = geoInfo.city || 'Unknown';
  updateCity(cityName);
  return (
    <></>
  );
}
