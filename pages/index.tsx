import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { EntryList, NewEntry } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx = {{height: '100vh', margin: '25px'}}>
            <CardHeader title="Pending"/>
            <NewEntry />
            <EntryList status='pending'/>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
        <Card sx = {{height: '100vh', margin: '25px'}}>
            <CardHeader title="In Progress"/>
            <EntryList status='in-progress' />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
        <Card sx = {{height: '100vh', margin: '25px'}}>
            <CardHeader title="Completed"/>
            <EntryList status='finished' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage;