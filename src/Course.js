import React from 'react';

const Course = ({ course }) => {
    const { heading, span, para, name, span2, star1, star2, img, img2 } = course

    console.log(img)
    return (
        <div className='mx-6 my-3'>
            <h1 className='md:text-5xl text-3xl font-extrabold'>{heading}</h1>
            <span className='flex text-muted'>{span} <div class="stat-figure text-muted ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div></span>
            <div className='grid grid-cols-2 gap-4 mt-12'>
                <div>
                    <p className='mb-8 text-black font-semibold'>{para}</p>
                    <span className='flex items-center text-primary font-semibold my-6'>
                        <div class="avatar mr-3">
                            <div class="w-7 rounded-full">
                                <img src={img2} />
                            </div>
                        </div>
                        {name}
                    </span>

                    <div className='my-8'>
                        <div>
                            <span className='flex items-center'>
                                <div class="rating mr-3">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" checked />
                                </div>
                                {star1}
                            </span>
                        </div>
                        <div>
                            <span className='flex items-center'>
                                <div class="rating mr-3">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" checked />
                                </div>
                                {star2}
                            </span>
                        </div>
                        <div className='text-black font-semibold my-3'>
                            {span2}
                        </div>
                    </div>

                    <div className='flex align-items'>
                        <button class="btn btn-primary rounded-full capitalize mr-3">See Class Schedule &#62;</button>
                        <button class="btn btn-ghost gap-2 text-primary mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            Save
                        </button>
                        <button class="btn text-primary btn-ghost gap-2">
                            <img src="data:image/svg+xml;base64,CjxpbWcgc3R5bGU9IndpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0O2JhY2tncm91bmQtaW1hZ2U6IG5vbmU7IiBzcmM9Ii8vcGljLm9ubGluZXdlYmZvbnRzLmNvbS9zdmcvaW1nXzI2MDM2Ni5wbmciIGFsdD0iU2hhcmUiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj4KICA=" width="16" height="16"></img>
                            Share
                        </button>
                    </div>




                </div>
                <div>
                    <img src={img} alt="" srcset="" />


                </div>


            </div>
        </div>
    );
};

export default Course;