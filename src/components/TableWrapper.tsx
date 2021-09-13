import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

import { findPremierLeagueTable } from '../api/fetchPremierLeague';
import { PremierLeagueTable } from '../types';
import TableItem from './TableItem';

const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 1rem 0;
  padding: 1rem 0;
  border: 1px solid #4e4e4e;
  border-radius: 4px;
`;

const TableHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 2rem;
  border-bottom: 1px solid #4e4e4e;

  div {
    margin: 0 0.25rem;
    border: 1px solid transparent;
  }
`;

const LeagueLogo = styled.div`
  flex-basis: 2rem;
  max-width: 2rem;

  img {
    width: 100%;
  }
`;

const TableHeadingClub = styled.div<{ primary: boolean }>`
  margin: 0;
  min-width: 20.5rem;
  color: #000;
  height: 100%;
  display: flex;
  align-items: center;

  p {
    margin: 0 0.5rem;
  }
`;

const TableHeadingPoints = styled.div`
  min-width: 2rem;
  flex-basis: 2rem;
  height: 100%;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }
`;

const TableHeadingMatchesPlayed = styled(TableHeadingPoints)``;

const TableHeadingWin = styled(TableHeadingPoints)``;

const TableHeadingDraw = styled(TableHeadingPoints)``;

const TableHeadingLose = styled(TableHeadingPoints)``;

const TableHeadingGoalsFor = styled(TableHeadingPoints)``;

const TableHeadingGoalsAgainst = styled(TableHeadingPoints)``;

const TableHeadingGoalDiff = styled(TableHeadingPoints)``;

function TableWrapper() {
  const [premierLeagueTable, setpremierLeagueTable] = useState<
    PremierLeagueTable | []
  >([]);

  const handlePremierLeagueTable = async () => {
    const fetchedData = await findPremierLeagueTable();
    setpremierLeagueTable((): PremierLeagueTable => {
      const updatedLeagueTable = [...fetchedData];
      console.log("updatedLeagueTable ?: ,", updatedLeagueTable);
      return updatedLeagueTable;
    });
  };

  return (
    <TableWrap>
      <TableHeading>
        <LeagueLogo>
          <img
            src="https://media.api-sports.io/football/leagues/39.png"
            alt=""
          ></img>
        </LeagueLogo>
        <TableHeadingClub primary>
          <p>Clubs</p>
        </TableHeadingClub>
        <TableHeadingMatchesPlayed>
          <p>MP</p>
        </TableHeadingMatchesPlayed>
        <TableHeadingPoints>
          <p>P</p>
        </TableHeadingPoints>
        <TableHeadingWin>
          <p>W</p>
        </TableHeadingWin>
        <TableHeadingDraw>
          <p>D</p>
        </TableHeadingDraw>
        <TableHeadingLose>
          <p>L</p>
        </TableHeadingLose>
        <TableHeadingGoalsFor>
          <p>GF</p>
        </TableHeadingGoalsFor>
        <TableHeadingGoalsAgainst>
          <p>GA</p>
        </TableHeadingGoalsAgainst>
        <TableHeadingGoalDiff>
          <p>GD</p>
        </TableHeadingGoalDiff>
      </TableHeading>
      {premierLeagueTable.map(position => (
        <TableItem
          key={position.rank}
          rank={position.rank}
          id={position.team_id}
          teamName={position.teamName}
          logo={position.logo}
          points={position.points}
          matchesPlayed={position.all.matchsPlayed}
          matchesWin={position.all.win}
          matchesDraw={position.all.draw}
          matchesLose={position.all.lose}
          goalsFor={position.all.goalsFor}
          goalsAgainst={position.all.goalsAgainst}
          goalsDiff={position.goalsDiff}
          uclPosition={position.rank < 5 ? true : false}
          eulPosition={position.rank >= 5 && position.rank < 7 ? true : false}
          relegationPosition={position.rank > 17 ? true : false}
        />
      ))}
      <button onClick={handlePremierLeagueTable}>Table</button>
    </TableWrap>
  );
}

export default TableWrapper;
