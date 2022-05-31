function ScoreScale ({Score}) {
    const range = [1, 2, 3, 4, 5]


    return (
        <div>
            {range.map((rangeSkill) => 
                Score >= rangeSkill ? (
                    <span key={rangeSkill.toString()}> 🟡 </span>
                    ) : <span key={rangeSkill.toString()}> ⚪ </span>
            )}
        </div>
    )
}

export default ScoreScale
