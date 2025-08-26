'use client';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AddEventForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

   const handleSubmit = async (e) => {
       e.preventDefault();
       const payload = {
           name: e.target.name.value,
           details: e.target.details.value,
           location: e.target.location.value,
           imageUrl: e.target.imageUrl.value,
       };

       try {
           const res = await fetch('/api/event', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(payload),
           });

           const data = await res.json(); // ✅ server থেকে JSON আসবে

           if (data.success) {
               toast.success('Event added successfully!');
               e.target.reset();
               router.push('/');
           } else {
               toast.error(data.message || 'Failed to add event');
           }
       } catch (err) {
           console.error(err);
           toast.error('Server error');
       }
   };


    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-4  rounded shadow"
        >
            <h2 className="text-2xl font-bold mb-4">Add New Event</h2>

            <div className="mb-3">
                <label htmlFor="name" className="block font-medium">
                    Event Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border p-2 rounded"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="details" className="block font-medium">
                    Details
                </label>
                <textarea
                    name="details"
                    id="details"
                    className="w-full border p-2 rounded"
                    rows={4}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="location" className="block font-medium">
                    Location
                </label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    className="w-full border p-2 rounded"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="imageUrl" className="block font-medium">
                    Image URL
                </label>
                <input
                    type="url"
                    name="imageUrl"
                    id="imageUrl"
                    className="w-full border p-2 rounded"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="button"
            >
                {loading ? 'Submitting...' : 'Add Event'}
            </button>
        </form>
    );
};

export default AddEventForm;
