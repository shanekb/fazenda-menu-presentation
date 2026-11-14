"use client";
import {useEffect,useRef,useState} from 'react';
const KEY='fazenda-referral-dismissed-v1';
const OPTIONS=['Instagram','TikTok','Google','Flyer','Friend','Other'];
export default function ReferralQuestion(){
 const dialog=useRef<HTMLDialogElement>(null);
 const [busy,setBusy]=useState(false),[error,setError]=useState('');
 useEffect(()=>{let seen=false;try{seen=Date.now()-Number(localStorage.getItem(KEY)||0)<30*86400000;}catch{} if(!seen)dialog.current?.showModal();},[]);
 function dismiss(){try{localStorage.setItem(KEY,String(Date.now()));}catch{} dialog.current?.close();}
 async function answer(source:string){
  setBusy(true);setError('');
  try{
   let responseId=crypto.randomUUID();try{responseId=sessionStorage.getItem('fazenda-referral-id')||responseId;sessionStorage.setItem('fazenda-referral-id',responseId);}catch{}
   const entry=new URLSearchParams(location.search).get('menu');
   const response=await fetch('https://fazenda-menu-preview-2026.shanedankb.chatgpt.site/api/referrals',{method:'POST',credentials:'omit',headers:{'Content-Type':'application/json'},body:JSON.stringify({source,responseId,menu:entry==='drinks'||entry==='desserts'?entry:'food'}),signal:AbortSignal.timeout(8000)});
   if(!response.ok)throw new Error('save failed');dismiss();
  }catch{setError('We couldn’t save your answer. Please try again or skip to the menu.');}finally{setBusy(false);}
 }
 return <dialog ref={dialog} className="referral-dialog" aria-labelledby="referral-title" aria-describedby="referral-description" onCancel={e=>{e.preventDefault();dismiss();}}>
  <span className="eyebrow">WELCOME TO FAZENDA</span><h2 id="referral-title">How did you hear about us?</h2>
  <p id="referral-description">One quick, optional question before you explore.</p>
  <div className="referral-options">{OPTIONS.map(option=><button disabled={busy} key={option} onClick={()=>answer(option)}>{option}</button>)}</div>
  <p className="referral-privacy">Your answer helps us understand how guests find us. We save your choice and menu category, without asking for your name or contact details.</p>
  <p role="status" className="referral-status">{busy?'Saving your answer…':error}</p>
  <button className="referral-skip" onClick={dismiss} autoFocus>Skip to the menu →</button>
 </dialog>
}
