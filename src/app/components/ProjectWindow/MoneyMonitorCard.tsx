import Image from 'next/image';
import { useState } from 'react';

const MoneyMonitorCard = () => {
    const [visible, setVisible] = useState(true);
    
    return (
        <section
            className="relative flex justify-center items-center pt-12 pb-20 px-4"
            style={{
                background: 'linear-gradient(180deg, rgba(0, 200, 255, 1) 0%, rgba(2, 0, 36, 1) 100%)',
            }}
        >
            <div
                className="relative rounded-xl border border-[#bfc0ff33] shadow-[0_0_20px_#bfc0ff33] p-6 max-w-[720px] w-full"
                style={{ backdropFilter: 'blur(10px)' }}
            >
                <Image
                    src="/money-monitor.png"
                    alt="money-monitor hero"
                    className="rounded-lg shadow-lg"
                    width={600}
                    height={280}
                />

                <div
                    className={`absolute top-1/2 -right-5 -translate-y-1/2 rounded-lg bg-[#161b22] p-4 max-w-[360px] w-full shadow-lg transition-opacity duration-700 ease-in-out ${
                        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{ boxShadow: '0 0 20px #000000cc' }}
                    >
                    <div className="flex items-center space-x-2 mb-3 text-[11px] text-[#8b949e] font-semibold">
                        <i className="fas fa-wallet" />
                        <span>Money Monitor - Expense Tracker</span>
                        <span className="bg-[#a7f583] text-[#0e1114] rounded px-1.5 py-0.5 text-[9px] font-normal uppercase">
                            Full Stack
                        </span>
                        </div>

                        <p className="text-[11px] text-[#8b949e] mb-3 leading-tight">
                        Money Monitor is a full-stack expense tracking app designed to help users log, categorize, and analyze their spending habits effortlessly.
                        </p>

                        <p className="text-[11px] text-[#8b949e] mb-3 leading-tight">
                        It features real-time data updates, interactive visualizations, and category-wise analytics for smarter budgeting.
                        <span className="font-semibold text-[#58a6ff]"> Tech Stack: MongoDB • Express • React • Node.js</span>
                        </p>

                    <div className="bg-[#0d1117] rounded-md p-3 text-[11px] font-mono leading-snug text-[#8b949e]">
                        <div className="flex items-center space-x-2 mb-2">
                            <i className="fab fa-github" />
                            <span className="font-semibold">some code snippet</span>
                            <span className="bg-[#6e7681] text-[#c9d1d9] rounded px-1.5 py-0.5 text-[9px] font-normal uppercase">
                                AI
                            </span>
                        </div>
                        <pre className="overflow-x-auto rounded-md bg-[#161b22] p-2">
                            <code>
                                <span className="text-[#8b949e]"># Transaction Routes</span><br />
                                <span className="text-[#8affbf]">const router = require(&apos;express&apos;).Router();</span><br />
                                <span className="text-[#8affbf]">const moment = require(&apos;moment&apos;);</span><br />
                                <span className="text-[#8affbf]">const transaction = require(&apos;../model/Transaction&apos;);</span><br />
                                <br />
                                <span className="text-[#8b949e]"># Add Transaction</span><br />
                                <span className="text-[#8affbf]">router.post(&apos;/add-transaction&apos;, async (req, res) =&gt; &#123;</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;try &#123;</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&nbsp;&nbsp;const newTransaction = new transaction(req.body);</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&nbsp;&nbsp;await newTransaction.save();</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&nbsp;&nbsp;res.send(&apos;Transaction added successfully&apos;);</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&#125; catch (error) &#123;</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&nbsp;&nbsp;res.status(500).json(error);</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&#125;</span><br />
                                <span className="text-[#8affbf]">&#125;);</span><br />
                                <br />
                                {/* <span className="text-[#8b949e]"># Edit Transaction</span><br />
                                <span className="text-[#8affbf]">router.post(&apos;/edit-transaction&apos;, async (req, res) =&gt; &#123;</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;try &#123;</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&nbsp;&nbsp;await transaction.findOneAndUpdate(&#123; _id: req.body.transactionId &#125;, req.body.payload);</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&nbsp;&nbsp;res.send(&apos;Transaction updated successfully&apos;);</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&#125; catch (error) &#123;</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&nbsp;&nbsp;res.status(500).json(error);</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&#125;</span><br />
                                <span className="text-[#8affbf]">&#125;);</span><br />
                                <br /> */}
                                <span className="text-[#8b949e]"># Delete Transaction</span><br />
                                <span className="text-[#8affbf]">router.post(&apos;/delete-transaction&apos;, async (req, res) =&gt; &#123;</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;try &#123;</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&nbsp;&nbsp;await transaction.findOneAndDelete(&#123; _id: req.body.transactionId &#125;);</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&nbsp;&nbsp;res.send(&apos;Transaction deleted successfully&apos;);</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&#125; catch (error) &#123;</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&nbsp;&nbsp;res.status(500).json(error);</span><br />
                                <span className="text-[#8affbf]">&nbsp;&nbsp;&#125;</span><br />
                                <span className="text-[#8affbf]">&#125;);</span>
                                </code>

                        </pre>
                    </div>
                </div>

                <button
                    aria-label="Toggle"
                    onClick={() => setVisible((prev) => !prev)}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#30363d] hover:bg-[#484f58] flex items-center justify-center text-[#8b949e]"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5-6h3m2 6a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14z" />
                    </svg>

                    </button>
            </div>
        </section>
    );
};

export default MoneyMonitorCard;
