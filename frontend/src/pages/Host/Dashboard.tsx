const Dashboard = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white van-card p-4">
          <div className="text-lg font-bold mb-2">Income last 30 days</div>
          <div className="text-3xl font-bold">$2,260</div>
        </div>
        <div className="bg-white van-card p-4">
          <div className="text-lg font-bold mb-2">Review score</div>
          <div className="text-3xl font-bold">5.0/5</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
